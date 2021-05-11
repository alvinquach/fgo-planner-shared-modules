import { Entity } from '../../entity.type';
export declare type GameSoundtrack = Entity<number> & {
    name?: string;
    nameJp?: string;
    /**
     * Whether the soundtrack is unlocked by default.
     */
    unlocked: boolean;
    /**
     * Material required to unlock the soundtrack.
     */
    material?: {
        itemId: number;
        quantity: number;
    };
    audioUrl?: string;
};
