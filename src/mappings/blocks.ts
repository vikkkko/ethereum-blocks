import {
    BigInt,
    ethereum
} from "@graphprotocol/graph-ts"

import {
    Block
} from "../../generated/schema"

export function handleBlock(block: ethereum.Block): void {
    let id = block.hash.toHex()
    let blockEntity = new Block(id);
    blockEntity.number = block.number;
    blockEntity.timestamp = block.timestamp;
    if(block.number == BigInt.fromI32(0)){
        blockEntity.parentHash = "0x0";
        blockEntity.stateRoot = "0x0";
    } else{
        blockEntity.parentHash = block.parentHash.toHex();
        blockEntity.stateRoot = block.stateRoot.toHex();
    }
    blockEntity.author = block.author.toHex();
    blockEntity.difficulty = block.difficulty;
    blockEntity.totalDifficulty = block.totalDifficulty;
    blockEntity.gasUsed = block.gasUsed;
    blockEntity.gasLimit = block.gasLimit;
    blockEntity.receiptsRoot = block.receiptsRoot.toHex();
    blockEntity.transactionsRoot = block.transactionsRoot.toHex();
    blockEntity.size = block.size;
    blockEntity.unclesHash = block.unclesHash.toHex();
    blockEntity.save();
  }