function concat3(string1, string2, string3, separator) {
    /*
     * return [...arguments].reduce((acc, x)=> {
     *   if (x == separator) return acc;
     *   return acc + separator + x;
     * });
     */
    return [string1,string2,string3].join(separator);
}

export { concat3 };

