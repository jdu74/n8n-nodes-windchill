import { INodeProperties } from "n8n-workflow";

export const PtcDynamicDocMgmtNoteFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'NoteId',
		name: 'NoteId-string(path)',
		description: 'Note ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /Notes('{NoteId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
