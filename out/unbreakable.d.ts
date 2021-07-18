import Mod from "mod/Mod";
import Message from "language/dictionary/Message";
import Item from "game/item/Item";
export default class Unbreakable extends Mod {
    readonly messageVersion: Message;
    onGameScreenVisible(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onItemDamage(item: Item, modifier: number): number;
}
