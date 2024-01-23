class Cloudlink {
    events: { [key: number]: { event: string, cb: Function } } = {};
    _numevents: number = 0;
    ws: WebSocket|null = null;

    connect(serverUri: string) {
		return new Promise<void>((resolve, reject) => {
			try {
				if (this.ws && this.ws.readyState === 1) {
					console.log(
						"connection",
						"already connected, disconnecting..."
					);
					this.disconnect(1000, "Intentional disconnect");
				}

				this.ws = new WebSocket(serverUri);
				this.ws.addEventListener("open", async () => {
					try {
						this.emit("connectionstart");
						console.log("connection", "connected to websocket");

                        this.once("statuscode", () => {
                            this.send({
                                cmd: "direct",
                                val: {cmd: "type", val: "js"},
                                listener: "send_type",
                            });
                            const tkeyEv = this.sendListener(
                                {
                                    cmd: "direct",
                                    val: "meower",
                                    listener: "send_tkey",
                                },
                                (cmd: any) => {
                                    if (cmd.cmd === "statuscode") {
                                        this.off(tkeyEv);
    
                                        if (cmd.val === "I:100 | OK") {
                                            resolve();
                                            console.log(
                                                "connection",
                                                "successfully connected"
                                            );
                                        } else {
                                            reject(cmd.val);
                                            console.error(
                                                "connection",
                                                "error connecting; code:",
                                                cmd.val
                                            );
                                        }
                                    }
                                }
                            );
                            this.emit("connected");
                        });
					} catch (e) {
						console.error("connection", "error connecting:", e);
						reject(e);
					}
				});
				this.ws.addEventListener("message", socketdata => {
					const data = JSON.parse(socketdata.data);

					console.log("< incoming", data);

					try {
						if (typeof data.val == "string") {
							data.val = JSON.parse(data.val);
							console.log("< incoming (edited)", data);
						}
					} catch {}

					this.emit(data.cmd, data);
					if (data.listener) {
						this.emit("__listener_" + data.listener, data);
					}
				});
				this.ws.addEventListener("close", e => {
					console.log(
						"connection",
						"disconnected with code ",
						e.code,
						" and reason",
						e.reason
					);
					this.emit("disconnected", e);
				});
				this.ws.addEventListener("error", e => {
					console.error("connection", "error:", e);
					this.emit("error", e);
				});
			} catch (e) {
				reject(e);
			}
		});
	}

    send(data: any) {
		if (!this.ws || this.ws.readyState !== 1) {
			throw new Error(
				"Not connected; use link.connect(server) to connect"
			);
		}
		console.log("> outgoing", data);
		this.ws.send(JSON.stringify(data));
	}

    sendListener(data: any, listenerCb: Function) {
		if (!data.listener) throw new Error("data must have a listener");

		this.send(data);
		return this.onListener(data.listener, listenerCb);
	}

    on(event: string, cb: Function) {
		this._numevents++;
		this.events[this._numevents] = {
			event,
			cb,
		};
		return this._numevents;
	}

    onListener(listener: string, cb: Function) {
		return this.on("__listener_" + listener, cb);
	}

    off(id: number) {
		if (!this.events[id])
			throw new Error("Tried to remove nonexistent listener");
		delete this.events[id];
	}

    once(event: string, cb: Function) {
		const id = this.on(event, () => {
			cb(arguments);
			this.off(id);
		});
        return id;
	}

    emit(event: string, data?: any) {
        Object.values(this.events).forEach(e => {
			if (e.event === event) e.cb(data);
		});
	}

    disconnect(_code: number, _reason: string) {
		if (!this.ws || this.ws.readyState !== 1) {
			return;
		}
		this.ws.close(_code, _reason);
	}
}

const cl = new Cloudlink();
export default cl;