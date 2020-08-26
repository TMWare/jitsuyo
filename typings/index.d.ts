declare module '@tmware/util' {

    /**
     * Validators for various strings
     */
    class Validators {
        /**
         * RegExp for URL validation
         */
        urlRegex: RegExp;
        /**
         * RegExp for Discord emoji name validation
         */
        emojiRegex: RegExp;
        private invalidName;
        /**
         * Validate a URL
         * @param {String} url URL to validate
         * @returns {Boolean} wether the given string is a valid url
         */
        isUrl(url: string): boolean;
        /**
         * Validate an emoji name
         * @param {String} name name to validate
         * @returns {Boolean} wether the given string is a valid name for discord emojis
         */
        isValidEmojiName(name: string): boolean;
        /**
         * Get a name that's valid for discord emojis
         * @param {String} name name to try
         * @returns {String | "invalid_name"} The filtered name or a substitute
         */
        getValidEmojiName(name: string): string;
    }

    /**
     * All utility packaged
     */
    class Util {
        validators: Validators
    }

    export default Util
}
