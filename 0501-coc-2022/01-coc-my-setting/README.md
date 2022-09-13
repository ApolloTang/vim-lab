How to run:

```
vim -u dot-vimrc project-<type>/test.ts
```
or

```
mvim -u dot-vimrc project-<type>/test.ts
```
Where `<type>` can be `ts`, `jd`, or `flow`

Then in normal mode:

```
:PlugInstall
:CocInstall coc-tsserver
```

Each projects folder is configured to different language in `./dot-vimrc/coc-setting.json`

---

Todo:

Done:

  ~~Add ability to configure custom location instaed of use `~/.config/coc/`~~

~~see:~~ 

~~[https://github.com/neoclide/coc.nvim/issues/1528](https://github.com/neoclide/coc.nvim/issues/1528)~~

~~[https://github.com/neoclide/coc.nvim/pull/1529~~](https://github.com/neoclide/coc.nvim/pull/1529)