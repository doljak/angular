const recursive = (n) => {
    const result = (n <= 2) ? 1 : recursive(n - 1) + recursive(n - 2);
    return result
}

console.log(recursive(42))