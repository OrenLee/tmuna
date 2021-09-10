package com.oren.backend.exceptions;

public class TmunaSystemException extends Exception {
    public TmunaSystemException(ErrMsg errMsg){
        super(errMsg.getDesc());
    }
}
