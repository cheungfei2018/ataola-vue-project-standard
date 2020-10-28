# git 协作流程规范


## git的分支介绍

* master 主分支，用于生产环境

* beta 测试分支，用于测试环境

* dev 开发分支， 用于开发环境

* features 功能特性分支， 用于实现需求或者功能

* bugs 线上出现严重bug，需要开一个分支进行修复

## git 协作流程

## 本地特性分支

* 新建： `git checkout -b ataola/feature`

* 远程： 根据实际情况看要不要传到远程

## 合并本地特性分支到开发环境远程

* 切换dev分支： `git checkout dev`

* 合并前先pull拉取最新: `git pull`

* 合并特性分支： `git merge ataola/feature`

  * 若此步遇到冲突, 手动解决冲突后： `git merge --continue`

* 推送到远程： `git push orign dev`

## 合并本地特性分支到测试环境远程

步骤同上，不再赘述

## 合并本地特性分支到生产环境远程

步骤同上，不再赘述

## 删除本地特性分支

* 删除本地特性分支： `git branch -d ataola/feature`

* 同步到远程: `git push orign :ataola/feature`

## 一个完整的git协作流程

新建分支 -> 编码 -> 测试 -> 发布 -> 上线


## 相关命令

* 添加文件 `git add .`

* 添加并提交文件 `git commit -a -m "this is ataola coding for biubiubiu"`

* 拉取远程分支 `git pull --rebase origin master`

  * --rebase, 变基合并， 减少无意义合并

* 切换分支 `git checkout ataola/feature`

* 与远程建立连接 `git remote add origin https://github.com/cnroadbridge/ataola-vue-project-standard.git`

* 提交到远程 `git push -u origin master`

## 注意

* 多人协作严禁工程项目在master分支开发

