//Chat-GPT API
#macro API_KEY "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"
//Gemini API
//#macro API_KEY "AIzaSyC41HfhZg4cJFhAbMyMcim1l3HU_GFdt40";
//Botpress API
//#macro API_KEY "bp_pat_6DiinRfcvpmf3cj0E7M07xW4y98FhjrEXB0V"
#macro X_USER_KEY "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5ldy11c2VyIiwiaWF0IjoxNzM4NzI1Nzk5fQ.p4yzNBkWlwgJKXOhUfjjKV141YxOqKcNWzEtRNaTfPY"
#macro CONV_ID "conversation-1"

#macro DOWN 0
#macro SIDE 1
#macro UP 2

enum STATE_AARIONA {
	IDLE,
	WALK,
	SPRINT,
}

pause = false;