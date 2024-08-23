import {Lum0x} from "lum0x-sdk";

Lum0x.init('TEST_KEY');

//채널 정보(팔로워)
async function getChannelBulkSearch() {
    const data = await Lum0x.farcasterChannel.getChannelBulkSearch({
        ids: "degenpad,farcaster-rollup",
        type: "id"
    });
    console.log(data);
}

//유저 정보(팔로워)
async function getUserByFids() {
    const data = await Lum0x.farcasterChannel.getChannelBulkSearch({
        ids: "degenpad,farcaster-rollup",
        type: "id"
    });
    console.log(data);
}

//특정 유저가 작성한 Cast
async function getCastsByFid() {
    const data = await Lum0x.farcasterChannel.getChannelBulkSearch({
        ids: "degenpad,farcaster-rollup",
        type: "id"
    });
    console.log(data);
}

//특정 Cast의 리액션 정보
async function getCastReaction() {
    const data = await Lum0x.farcasterChannel.getChannelBulkSearch({
        ids: "degenpad,farcaster-rollup",
        type: "id"
    });
    console.log(data);
}

document.querySelector("button").addEventListener("click",()=>{getChannelBulkSearch()});