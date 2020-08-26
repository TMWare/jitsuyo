declare module '@tmware/util' {

    class Validators {
        urlRegex: RegExp;
        emojiRegex: RegExp;
        private invalidName;
        isUrl(url: string): boolean;
        isValidEmojiName(name: string): boolean;
        getValidEmojiName(name: string): string;
    }

    const utils: {
        validators: Validators
    }

    export default utils
}
