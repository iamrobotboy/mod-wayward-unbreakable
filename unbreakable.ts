import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import Message from "language/dictionary/Message";
import { MessageType } from "game/entity/player/IMessageManager";
import Item from "game/item/Item";
import { HookMethod } from "mod/IHookHost";

export default class Unbreakable extends Mod {
    @Register.message("Version")
    public readonly messageVersion: Message;

    @HookMethod
    public onGameScreenVisible(): void {
        localPlayer.messages.type(MessageType.Good).send(this.messageVersion);
    }

    @HookMethod
    public onGameStart(isLoadingSave: boolean, playedCount: number): void {
        const playerItems = [...localPlayer.inventory.containedItems];
        playerItems.push(...localPlayer.getEquippedItems());
        for(let i = 0; i < playerItems.length; i++) {
            let item = playerItems[i];
            item.minDur = item.maxDur;
        }
    }

    @HookMethod
    public onItemDamage(item: Item, modifier: number): number {
        return 0;
    }
}