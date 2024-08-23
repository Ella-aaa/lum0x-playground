import {Lum0x} from "lum0x-sdk";

Lum0x.init('TEST_KEY');

async function getChannelBulkSearch() {
    const data = await Lum0x.farcasterChannel.getChannelBulkSearch({
        ids: "degenpad,farcaster-rollup",
        type: "id"
    });
    console.log(data);
}

document.querySelector("button").addEventListener("click",()=>{getChannelBulkSearch()});