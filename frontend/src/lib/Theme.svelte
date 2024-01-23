<script lang="ts">
	import Modal from "./Modal.svelte";
	import ThemePreview from "./Previewer.svelte";

    import type { Theme } from "./types";

    import { X, Users, ThumbsUp, ThumbsDown, Lock, Link, Pencil, Trash } from "lucide-svelte";

    export let theme: Theme;

    let modalOpen: boolean = false;
</script>

{#if modalOpen}
    <Modal on:close={() => modalOpen = false}>
        <div style="position: relative;">
            <!-- Exit preview -->
            <div style="position: absolute; top: 0; right: 0;">
                <button on:click={() => modalOpen = false}><X /></button>
            </div>

            <!-- Main content -->
            <div style="display: flex; flex-direction: row;">
                <!-- Theme preview (displayed on the left) -->
                <div class="width: 50%;">
                    <ThemePreview size={"100%"} theme={theme.json} />
                </div>

                <!-- Details (displayed on the right) -->
                <div style="width: 50%; margin-left: 10px; display: flex; flex-direction: column;">
                    <!-- Header -->
                    <h3 style="margin: 0; margin-top: 5px; margin-bottom: 0;">{theme.name}</h3>
                    <span style="font-size: 16px; display: block; white-space: normal; word-wrap: break-word; margin-bottom: 5px;">
                        by {theme.author}
                    </span>

                    <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
                        <!-- Description -->
                        <span style="color: var(--light-gray); font-size: 18px; display: inline-block; width: 25em; white-space: normal; word-wrap: break-word;">
                            {theme.description}
                        </span>

                        <!-- JSON and application buttons -->
                        <div style="margin-top: 0.5em;">
                            <div style="margin-bottom: 0.2em;">
                                <input id="json" type="text" style="width: 97%; background-color: var(--background); color: white; border-radius: 5px; border-width: 2px; border-style: solid; border-color: var(--gray); padding: 5px;" value={JSON.stringify(theme.json)} disabled>
                            </div>
                            <div style="display: flex; flex-direction: row;">
                                <button style="width: 50%; background-color: var(--gray); border-radius: 5px; font-size: 14px; padding-left: 2em; padding-right: 2em; padding-top: 0.5em; padding-bottom: 0.5em;">Copy</button>
                                <button style="margin-left: 2px; width: 50%; background-color: var(--gray); border-radius: 5px; font-size: 14px; padding-left: 2em; padding-right: 2em; padding-top: 0.5em; padding-bottom: 0.5em;">Apply</button>
                            </div>
                        </div>
                        
                        <!-- Social stuff and actions -->
                        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                            {#if theme.private}
                                <!-- Private status -->
                                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                                    <Lock /><span style="margin-left: 0.2em;">Private</span>
                                </div>
                            {:else}
                                <!-- Number of applications -->
                                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                                    <Users /><span style="margin-left: 0.2em;">5.49k</span>
                                </div>

                                <!-- Ratings -->
                                <div style="width: 5em; text-align: center;">
                                    <div title="123.12B / 24.62B">
                                        <span>123.12B</span>
                                        <div style="width: 100%; height: 0.2em; background-color: red; margin-top: 1px;">
                                            <div style="width: 80%; height: 100%; background-color: green;"></div>
                                        </div>
                                    </div>
                                    <div style="margin-top: 3px; display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                                        <ThumbsUp size={22} /><ThumbsDown size={22} />
                                    </div>
                                </div>
                            {/if}

                            <!-- Actions -->
                            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                                <Link /><Pencil /><Trash />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
{/if}

<button on:click={() => modalOpen = true}>
    <div class="container" style="display: flex; flex-direction: column;">
        <ThemePreview size={"266px"} theme={theme.json} />
        <h3 style="margin-top: 5px; text-align: left;">{theme.name}</h3>
        <span style="text-align: left; font-size: 14px; display: block; max-width: 266px; white-space: normal; word-wrap: break-word; margin-bottom: 5px;">
            by {theme.author}
        </span>
        <span style="text-align: left; color: var(--light-gray); font-size: 14px; display: inline-block; white-space: no-wrap; overflow: hidden; text-overflow: ellipsis; max-width: 266px;">
            {theme.description}
        </span>
        <div style="margin-top: auto; display: flex; flex-direction: row; align-items: flex-end; justify-content: space-between;">
            <!-- Number of applications -->
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                <Users /><span style="margin-left: 0.2em;">5.49k</span>
            </div>
            
            <!-- Ratings -->
            <div style="width: 5em; text-align: center;">
                <div title="123.12B / 24.62B">
                    <span>123.12B</span>
                    <div style="width: 100%; height: 0.2em; background-color: red; margin-top: 1px;">
                        <div style="width: 80%; height: 100%; background-color: green;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</button>
