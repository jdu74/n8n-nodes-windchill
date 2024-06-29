import { INodeProperties } from "n8n-workflow";

export const FunctionGetWorkItemReassignUserListWithDescription: INodeProperties[] = [
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
					'GET /GetWorkItemReassignUserList(WorkItems=@WorkItems)',
				],
			},
		},
		required: true,
	},
];
