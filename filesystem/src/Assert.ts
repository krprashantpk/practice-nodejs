import { error } from "console"

export  class  Assert{

    static ThrowIfNullAgrumentException(arg:string):void{
        if(!arg || arg==null) throw error(` {arg} is not valid agrument value.`);
    }
}