package com.bitc.restapiserver.service;

import com.bitc.restapiserver.DTO.UserListDTO;
import com.bitc.restapiserver.mapper.UerListMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


//@Autowired 대신 사용
@RequiredArgsConstructor
@Service
public class UserListServiceImpl implements UserListService{

//    @RequiredArgsConstructor 사용 시 final 사용
    private final UerListMapper userListMapper;

    @Override
    public List<UserListDTO> userTotal() throws Exception {
        return userListMapper.UserListTotal();
    }
}
