import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeTaskFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
