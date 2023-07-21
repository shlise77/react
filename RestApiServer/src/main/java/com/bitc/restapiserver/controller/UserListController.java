package com.bitc.restapiserver.controller;

import com.bitc.restapiserver.DTO.UserListDTO;
import com.bitc.restapiserver.service.UserListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})
@RestController
public class UserListController {

    @Autowired
    UserListService userListService;

    @RequestMapping(value="/userList", method = RequestMethod.GET)
    public Object userGetList() throws Exception{
        List<UserListDTO> boradList = userListService.userTotal();
        Map<String, String> result = new HashMap<String, String>();
        for(UserListDTO s: boradList){
            result.put("result",boradList.toString());
        }



        return result;
    }
}
