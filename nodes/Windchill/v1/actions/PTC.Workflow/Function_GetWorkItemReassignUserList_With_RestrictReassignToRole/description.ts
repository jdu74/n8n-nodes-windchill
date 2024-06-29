import { INodeProperties } from "n8n-workflow";

export const FunctionGetWorkItemReassignUserListWithRestrictReassignToRoleDescription: INodeProperties[] = [
	{
		displayName: 'RestrictReassignToRole',
		name: 'RestrictReassignToRole-boolean(path)',
		description: 'Whether Restrict Reassign To Role - boolean (path)',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					'GET /GetWorkItemReassignUserList(WorkItems=@WorkItems,RestrictReassignToRole={RestrictReassignToRole})',
				],
			},
		},
		required: true,
	},
	{
		displayName: '@WorkItems',
		name: '@WorkItems-string(query)',
		description: 'Work Items - string (query)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					'GET /GetWorkItemReassignUserList(WorkItems=@WorkItems,RestrictReassignToRole={RestrictReassignToRole})',
				],
			},
		},
		required: true,
	},
];
