export class Foo {
    private message: string;
    constructor () {
        this.message = "here";
    }

    public bar(buzz: string): Foo {
        console.log(buzz);

        return this;
    }
}