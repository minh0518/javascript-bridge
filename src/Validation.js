const { ERROR } = require('./constants/messages');
const { Console } = require('@woowacourse/mission-utils')

class Validation{

    static validationForBridgeLength(input){
        if(!Number.isInteger(Number(input))){
            Console.print(ERROR.NUMBER)
            Console.close()
        }if(Number(input)>20 || Number(input)<3){
            Console.print(ERROR.BRIDGE_LENGTH_BOUNDARY)
            Console.close()
        }if(input.length===0){
            Console.print(ERROR.EMPTY)
            Console.close()
        }
    }


    static validationForNextMove(input){
        if(input.length===0){
            Console.print(ERROR.EMPTY)
            Console.close()
        }
        if(!(input==='U' || input==='D')){
            Console.print(ERROR.NEXT_MOVE)
            Console.close()
        }

    }

    static validationForRetry(input){
        if(input.length===0){
            Console.print(ERROR.EMPTY)
            Console.close()
        }
        if(!(input==='R' || input==='Q')){
            Console.print(ERROR.RETRY)
            Console.close()
        }
    }
}

module.exports=Validation