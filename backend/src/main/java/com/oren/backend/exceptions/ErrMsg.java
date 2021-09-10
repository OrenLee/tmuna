package com.oren.backend.exceptions;

public enum ErrMsg {
    EMAIL_AND_PASSWORD_INCORRECT("Email and password combination is incorrect"),
    EMAIL_ALREADY_EXISTS("Email is already exists");

    private String desc;

    ErrMsg(String desc) {
        this.desc = desc;
    }

    public String getDesc() {
        return desc;
    }
}
