/// @description Transition to another room

var _inst = instance_create_depth(0,0,-99999,obj_warp);
	_inst.target_rm = target_rm;
	_inst.target_x = target_x;
	_inst.target_y = target_y;
	_inst.target_face = target_face;
