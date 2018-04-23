---
layout:     post
title:      BootStrap Table 的应用
subtitle:    使用中基础知识笔记
date:       2018-04-23
author:     ChaleMa
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - BootStrap
    - Bootstrap Table
---
>Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。

# 关于BootStrap

它由Twitter的设计师Mark Otto和Jacob Thornton合作开发，是一个CSS/HTML框架。Bootstrap提供了优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。Bootstrap一经推出后颇受欢迎，一直是GitHub上的热门开源项目，包括NASA的MSNBC（微软全国广播公司）的Breaking News都使用了该项目。 [2]  国内一些移动开发者较为熟悉的框架，如WeX5前端开源框架等，也是基于Bootstrap源码进行性能优化而来。

# BootStrap Table
## 主要功能
- 支持 Bootstrap 3 和 Bootstrap 2
- 自适应界面
- 固定表头
- 非常丰富的配置参数
- 直接通过标签使用
- 显示/隐藏列
- 显示/隐藏表头
- 通过 AJAX 获取 JSON 格式的数据
- 支持排序
- 格式化表格
- 支持单选或者多选
- 强大的分页功能
- 支持卡片视图
- 支持多语言
- 支持插件

## 开始使用
在head标签引入下面代码：
```
<!-- 引入bootstrap样式 -->
<link href="https://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<!-- 引入bootstrap-table样式 -->
<link href="https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.css" rel="stylesheet">

<!-- jquery -->
<script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<!-- bootstrap-table.min.js -->
<script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.js"></script>
<!-- 引入中文语言包 -->
<script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/locale/bootstrap-table-zh-CN.min.js"></script>
```
# 问题以及解决方式
## 1.获取checkbox选中行批量删除问题
```
//Table加id
<div class="table-responsive" >
    <table class="table text-nowrap table-hover" id="tb_departments"></table>
</div>
//表头添加checkbox
columns: [{
          field : 'state',
          checkbox : true
}]
//增加按钮点击事件获取选中行数据
$('#delLoan').click(function(){
        var rows = $('#tb_departments').bootstrapTable('getSelections');
        if(rows.length == 0){
            alert('请选择要删除的记录');
            return;
        };
        var datarows = '';
        for(var i=0;i<rows.length;i++){
            ids += rows[i]['fundParty'] +',';
        };
    });
//获取数据完成问题解决
```
## 2.每行加操作按钮（删除或编辑）
```
//首先在columns中添加操作表头和事件
columns: [{
                field: 'operate',
                title: '编辑',
                formatter: operateFormatter
            }]
//然后加入按钮,并在按钮中加入onclick事件传递id。
function operateFormatter(value, row, index) {
        return '<button type="button" class="RoleOfedit btn btn-primary" id="'+ row.id +'" onclick="edit(id)"  data-toggle="modal" style="display:inline"><i class="fa fa-pencil" aria-hidden="true"></i></button>';
    }
//定义edit()
 
function edit(id){
//获取id并获取数据进行编辑操作
}
```
## 3.表格内字体颜色的改变和增加图标
```
//给改变表格字体颜色的列加formatter事件；
columns: [{
                field: 'payStatus',
                title: '还款状态',
                formatter: function(value,row,index) {
                    var a = "";  
                        if(value == "未还清") {  
                            var a = '<span style="color:#c12e2a;"><i class="fa fa-times-circle-o" aria-hidden="true"></i>'+value+'</span>';  
                        }else if(value == "已还清"){  
                            var a = '<span style="color:#3e8f3e"><i class="fa fa-check-circle-o" aria-hidden="true"></i>'+value+'</span>';  
                        }  
                        return a;  
                },
                align:'center'
            }]

```
## 4.给列数据加点击事件，并获取各种数据
```
//根据数据判断显示的内容，加onclick事件；
//注意：数据传递\''+ row.firstStatus +'\'。
//列title：this.title;
 
columns: [{
                field: 'fundParty',
                title: '资金方',
                align:'center'
            }, {
                field: 'first',
                title: '4月1日',
                formatter: function(value,row,index) {
                    var first = "";
                    var firstStatus = row.firstStatus;
                        if(firstStatus == "未还") {  
                            var first = '<a href="javascript:void(0);" id="'+ row.fundParty +'" style="color:#c12e2a" onclick="payMoney(id,\''+ row.firstStatus +'\',\''+this.title+'\');return false;" >'+row.first+'</a>';  
                        }else if(firstStatus == "已还"){  
                            var first = '<a href="javascript:void(0);" id="'+ row.fundParty +'" style="color:#3e8f3e" onclick="payMoney(id,\''+ row.firstStatus +'\',\''+this.title+'\');return false;" >'+row.first+'</a><span style="color:#3e8f3e"><i class="fa fa-check-circle-o" aria-hidden="true"></i>'+firstStatus+'</span>';  
                        } 
                    return first;  
                },
                align:'center'
            }
//定义onclick事件

function payMoney(fundParty,Status,time){

//获取数据进行操作；

    };          
```
后记：关于问题大家可以留言。



