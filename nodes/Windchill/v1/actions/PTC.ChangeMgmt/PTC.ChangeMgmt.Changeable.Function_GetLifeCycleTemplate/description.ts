import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeableFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'ChangeableId',
		name: 'ChangeableId-string(path)',
		description: 'Changeable ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /Changeables('{ChangeableId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
