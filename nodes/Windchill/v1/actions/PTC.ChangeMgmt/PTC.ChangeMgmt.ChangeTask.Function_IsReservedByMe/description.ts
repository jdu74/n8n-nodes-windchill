import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeTaskFunctionIsReservedByMeDescription: INodeProperties[] = [
	{
		displayName: 'ChangeTaskId',
		name: 'ChangeTaskId-string(path)',
		description: 'Change Task ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.IsReservedByMe()",
				],
			},
		},
		required: true,
	},
];
