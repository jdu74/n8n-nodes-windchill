import { INodeProperties } from "n8n-workflow";

export const PtcDynamicDocMgmtNoteFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
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
					"GET /Notes('{NoteId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
