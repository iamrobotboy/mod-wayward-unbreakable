var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "mod/ModRegistry", "game/entity/player/IMessageManager", "mod/IHookHost"], function (require, exports, Mod_1, ModRegistry_1, IMessageManager_1, IHookHost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Unbreakable extends Mod_1.default {
        onGameScreenVisible() {
            localPlayer.messages.type(IMessageManager_1.MessageType.Good).send(this.messageVersion);
        }
        onGameStart(isLoadingSave, playedCount) {
            const playerItems = [...localPlayer.inventory.containedItems];
            playerItems.push(...localPlayer.getEquippedItems());
            for (let i = 0; i < playerItems.length; i++) {
                let item = playerItems[i];
                item.minDur = item.maxDur;
            }
        }
        onItemDamage(item, modifier) {
            return 0;
        }
    }
    __decorate([
        ModRegistry_1.default.message("Version")
    ], Unbreakable.prototype, "messageVersion", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], Unbreakable.prototype, "onGameScreenVisible", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Unbreakable.prototype, "onGameStart", null);
    __decorate([
        IHookHost_1.HookMethod
    ], Unbreakable.prototype, "onItemDamage", null);
    exports.default = Unbreakable;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5icmVha2FibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi91bmJyZWFrYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFPQSxNQUFxQixXQUFZLFNBQVEsYUFBRztRQUtqQyxtQkFBbUI7WUFDdEIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsNkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFHTSxXQUFXLENBQUMsYUFBc0IsRUFBRSxXQUFtQjtZQUMxRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5RCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUNwRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDN0I7UUFDTCxDQUFDO1FBR00sWUFBWSxDQUFDLElBQVUsRUFBRSxRQUFnQjtZQUM1QyxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7S0FDSjtJQXJCRztRQURDLHFCQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzt1REFDWTtJQUd4QztRQURDLHNCQUFVOzBEQUdWO0lBR0Q7UUFEQyxzQkFBVTtrREFRVjtJQUdEO1FBREMsc0JBQVU7bURBR1Y7SUF0QkwsOEJBdUJDIn0=