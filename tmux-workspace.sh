#!/bin/sh

session="til"

# Check if the session exists, discarding output
# We can check $? for the exit status (zero for success, non-zero for failure)
tmux has-session -t $session 2>/dev/null

if [ $? != 0 ]; then
  # Create new detached session
  tmux new-session -d -n "server" -s $session -x $(tput cols) -y $(tput lines)

  # Git window
  tmux new-window -n "git"
  tmux send-keys "gst" C-m

  # vim window
  tmux new-window -n "vim"
  tmux send-keys "vim" C-m
fi

# Attach to created session
tmux attach-session -t $session
