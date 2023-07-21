package com.bitc.restapiserver.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RequestMapping("/async")
// 리액트에서 서버를 접속 을 가능하게 하는 것
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})
@RestController
public class AsyncController {

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String index() throws Exception{
        return "index 페이지";
    }

    @RequestMapping(value="/sendDataGet", method = RequestMethod.GET)
    public Object sendDataGet() throws Exception{
        Map<String, String> result = new HashMap<String, String>();

        result.put("result", "success");
        result.put("data", "axios를 이용한 비동기 통신");


        return result;
    }

    @RequestMapping(value = "/sendDataGetParam", method=RequestMethod.GET)
    public Object sendDataGetParam(@RequestParam("idx") int idx){
        Map<String, String> result = new HashMap<String, String>();
        result.put("result", "success");
        result.put("data", "100");

        return result;
    }

    @RequestMapping(value="/sendDataPost", method=RequestMethod.POST)
    public Object sendDataPost(
            @RequestParam("userId") String userId,
            @RequestParam("userPw") String userPw) throws Exception{

        Map<String, String> user = new HashMap<String, String>();
        user.put("userId", userId);
        user.put("userPw", userPw);

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("result", " success");
        result.put("data", " user");

        return result;
    }

    @RequestMapping(value="/sendDataPut", method = RequestMethod.PUT)
    public Object sendDataPut(@RequestParam("idx") int idx) throws Exception{
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("result", "success");
        result.put("idx", idx);
        return result;
    }
    @RequestMapping(value="/sendDataDelete", method = RequestMethod.DELETE)
    public Object sendDataDelete(@RequestParam("idx") int idx) throws Exception{
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("result", "success");
        result.put("idx", idx);
        return result;
    }



}
