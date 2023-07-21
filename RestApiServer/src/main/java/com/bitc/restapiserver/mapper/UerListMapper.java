package com.bitc.restapiserver.mapper;

import com.bitc.restapiserver.DTO.UserListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UerListMapper {
    List<UserListDTO> UserListTotal() throws Exception;
}
