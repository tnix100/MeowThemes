<script lang="ts">
    import { LogOut } from 'lucide-svelte';

    import cl from "$lib/cloudlink";

    import { onMount } from 'svelte';
    
    onMount(async () => {
        cl.on("disconnected", () => cl.connect("wss://server.meower.org"));
        cl.connect("wss://server.meower.org");
    });
</script>

<div class="topnav">
    <div class="topnav-inner">
        <a class="left" style="cursor: pointer;" href="/">
            All Themes
        </a>
        <a class="left" style="cursor: pointer;" href="/admin">
            My Themes
        </a>
        <a class="left" style="cursor: pointer;" href="/admin">
            Rules & Privacy
        </a>

        <button class="right">
            <LogOut />
        </button>
        <span class="right" style="margin-top: 2px; padding-right: 0;">
            Tnix
        </span>
    </div>
</div>

<div class="page">
    <slot />
</div>