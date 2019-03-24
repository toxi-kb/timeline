export class Uuid {

    public static generate(): string {
        const arr = new Uint8Array(20);
        
        window.crypto.getRandomValues(arr);

        return Array.from(arr, (x) => x.toString(16)).join('');
    }

}
