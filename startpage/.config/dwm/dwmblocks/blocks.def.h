//Modify this file to change what commands output to your statusbar, and recompile using the make command.
static const Block blocks[] = {
	/*Icon*/	/*Command*/		/*Update Interval*/	/*Update Signal*/

	{"VOL ", "~/.config/scripts/volume-bar",		0,			5},

	{"CPU ", "~/.config/scripts/cpu-bar",			5,			0},

	{"RAM ", "~/.config/scripts/ram-bar-percentage",	5,			0},

	{"", "~/.config/scripts/clock-bar",			30,			0},
};

//sets delimeter between status commands. NULL character ('\0') means no delimeter.
static char delim[] = " | ";
static unsigned int delimLen = 5;
