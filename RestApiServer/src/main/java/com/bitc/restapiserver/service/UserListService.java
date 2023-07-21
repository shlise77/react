package com.bitc.restapiserver.service;

import com.bitc.restapiserver.DTO.UserListDTO;

import java.util.List;

public interface UserListService {
    List<UserListDTO> userTotal() throws Exception;
}
