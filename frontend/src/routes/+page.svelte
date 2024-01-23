<script lang="ts">
    import Theme from "$lib/Theme.svelte";
</script>

<div>
    <div class="heading">
        <h1>Top Themes</h1>
    </div>
    <div class="gallery">
        {#each ["a", "b", "c", "d"] as _}
            <Theme theme={{
                id: "abc",
                author: "tnix",
                name: "test",
                description: "asdasd",
                json: {
                    v: 1,
                    orange: "#f9a636",
                    orangeLight: "#ffcb5b",
                    orangeDark: "#d48111",
                    background: "#ffffff",
                    foreground: "#000000",
                    foregroundOrange: "#ffffff",
                    tinting: "#252525",
                },
                stats: {
                    likes: 123,
                    dislikes: 123,
                },
                time: 123,
                private: true,
            }} />
        {/each}
    </div>
    <br />
    <div class="heading">
        <h1>All Themes</h1>
    </div>
    <div class="gallery">
        {#each [
            {"v":1,"orange":"#a37a43","background":"#332b22","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#453827","orangeLight":"#e8b26a","orangeDark":"#5e421c"},
            {"v":1,"orange":"#ce00e6","background":"#2e2332","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#3c2646","orangeLight":"#ff26ff","orangeDark":"#9200a0"},
            {"v":1,"orange":"#0073e6","background":"#282c2d","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#2d3740","orangeLight":"#2daaff","orangeDark":"#003ca6"},
            {"v":1,"orange":"#e60000","background":"#322323","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#472525","orangeLight":"#ff2525","orangeDark":"#9f0000"},
            {"v":1,"orange":"#000000","background":"#000000","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#000000","orangeLight":"#000000","orangeDark":"#000000"},
            {"v":1,"orange":"#a37a43","background":"#332b22","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#453827","orangeLight":"#e8b26a","orangeDark":"#5e421c"},
            {"v":1,"orange":"#ce00e6","background":"#2e2332","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#3c2646","orangeLight":"#ff26ff","orangeDark":"#9200a0"},
            {"v":1,"orange":"#0073e6","background":"#282c2d","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#2d3740","orangeLight":"#2daaff","orangeDark":"#003ca6"},
            {"v":1,"orange":"#e60000","background":"#322323","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#472525","orangeLight":"#ff2525","orangeDark":"#9f0000"},
            {"v":1,"orange":"#000000","background":"#000000","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#000000","orangeLight":"#000000","orangeDark":"#000000"},
            {"v":1,"orange":"#a37a43","background":"#332b22","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#453827","orangeLight":"#e8b26a","orangeDark":"#5e421c"},
            {"v":1,"orange":"#ce00e6","background":"#2e2332","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#3c2646","orangeLight":"#ff26ff","orangeDark":"#9200a0"},
            {"v":1,"orange":"#0073e6","background":"#282c2d","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#2d3740","orangeLight":"#2daaff","orangeDark":"#003ca6"},
            {"v":1,"orange":"#e60000","background":"#322323","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#472525","orangeLight":"#ff2525","orangeDark":"#9f0000"},
            {"v":1,"orange":"#000000","background":"#000000","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#000000","orangeLight":"#000000","orangeDark":"#000000"},
            {"v":1,"orange":"#a37a43","background":"#332b22","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#453827","orangeLight":"#e8b26a","orangeDark":"#5e421c"},
            {"v":1,"orange":"#ce00e6","background":"#2e2332","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#3c2646","orangeLight":"#ff26ff","orangeDark":"#9200a0"},
            {"v":1,"orange":"#0073e6","background":"#282c2d","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#2d3740","orangeLight":"#2daaff","orangeDark":"#003ca6"},
            {"v":1,"orange":"#e60000","background":"#322323","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#472525","orangeLight":"#ff2525","orangeDark":"#9f0000"},
            {"v":1,"orange":"#000000","background":"#000000","foreground":"#ffffff","foregroundOrange":"#ffffff","tinting":"#000000","orangeLight":"#000000","orangeDark":"#000000"},
        ] as json}
            <Theme theme={{
                id: "abc",
                author: "tnix",
                name: "test",
                description: "asdasd",
                json,
                stats: {
                    likes: 123,
                    dislikes: 123,
                },
                time: 123,
                private: false,
            }} />
        {/each}
    </div>
</div>
