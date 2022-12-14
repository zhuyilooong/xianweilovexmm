import { Theme } from '../interface';

const icons = <const>[
    `đ¨`,
    `đ`,
    `âī¸`,
    `đģ`,
    `đ`,
    `đ¯`,
    `đ¤`,
    `đŧ`,
    `đ`,
    `đ`,
];

export type DefaultSoundNames = 'button-click' | 'triple';

import soundButtonClickUrl from './sounds/sound-button-click.mp3';
import soundTripleUrl from './sounds/sound-triple.mp3';
export const defaultSounds: Theme<DefaultSoundNames>['sounds'] = [
    {
        name: 'button-click',
        src: soundButtonClickUrl,
    },
    {
        name: 'triple',
        src: soundTripleUrl,
    },
];

export const defaultTheme: Theme<DefaultSoundNames> = {
    title: 'æč§Ŗįįžäēä¸Ēįž(DEMO)',
    name: 'éģčŽ¤',
    icons: icons.map((icon) => ({
        name: icon,
        content: icon,
        clickSound: 'button-click',
        tripleSound: 'triple',
    })),
    sounds: defaultSounds,
};
