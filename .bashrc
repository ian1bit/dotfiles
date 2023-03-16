# ~/.bashrc

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# alguns comandos simples do terminal
alias la='ls -a'
alias ll='ls -l'
alias ls='ls --color=auto'
#alias rm='rm -r'

# Apps
PS1='[\u@\h \W]\$ '

# Arquivos
alias yml='vim .config/alacritty/alacritty.yml'
alias dwm='cd ~/.config/dwm'
alias scripts='cd ~/.config/scripts && clear && ls'
