<script>
  import { fade, fly } from "svelte/transition";

  import { Tabs, Tab, TabList, TabPanel } from "./svelte-tabs/index";

  import copy from "clipboard-copy";

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let visible = false;

  function updateClipboard(event) {
    copy(event.detail.text);

    visible = true;
    delay(1000).then(() => {
      visible = false;
    });
  }

  //use bind:group, with a var to create a radio group and store the value of selected item
  //set value if this var to same value as radio item to set initial selection
  var switchValue;
  import ScreenTailwind from "./ScreenTailwind.svelte";
  import ScreenFlutter from "./ScreenFlutter.svelte";
  import ScreenSwiftUI from "./ScreenSwiftUI.svelte";
  import ScreenStemSwift from "./ScreenStemSwift.svelte";
  import ScreenHTML from "./ScreenHtml.svelte";
  import ScreenAbout from "./ScreenAbout.svelte";

  import { GlobalCSS } from "figma-plugin-ds-svelte";
</script>

<style lang="postcss">
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>

<Tabs>

  <TabList>
    <Tab>STSwift</Tab>
    <Tab>Tailwind 2</Tab>
    <Tab>Flutter</Tab>
    <Tab>SwiftUI</Tab>
    <Tab>HTML</Tab>
    <Tab>About</Tab>
  </TabList>

  <TabPanel>
    <ScreenStemSwift on:clipboard={updateClipboard} />
  </TabPanel>
  
  <TabPanel>
    <ScreenTailwind on:clipboard={updateClipboard} />
  </TabPanel>

  <TabPanel>
    <ScreenFlutter on:clipboard={updateClipboard} />
  </TabPanel>

  <TabPanel>
    <ScreenSwiftUI on:clipboard={updateClipboard} />
  </TabPanel>

  <TabPanel>
    <ScreenHTML on:clipboard={updateClipboard} />
  </TabPanel>

  <TabPanel>
    <ScreenAbout />
  </TabPanel>

</Tabs>

{#if visible}
  <div class="p-2">
    <div class="fixed bottom-0 left-0 w-full px-2 mb-2">
      <div
        class="flex items-center justify-center w-full h-8 bg-green-600
        rounded-lg"
        in:fly={{ y: 20, duration: 800 }}
        out:fade>
        <p class="text-white">Copied!</p>
      </div>
    </div>
  </div>
{/if}
