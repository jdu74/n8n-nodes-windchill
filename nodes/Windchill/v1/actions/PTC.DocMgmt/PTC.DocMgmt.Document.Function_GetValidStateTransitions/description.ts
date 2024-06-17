import { INodeProperties } from "n8n-workflow";

export const PtcDocMgmtDocumentFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
	{
		displayName: 'DocumentId',
		name: 'DocumentId-string(path)',
		description: 'Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
				operation: [
					"GET /Documents('{DocumentId}')/PTC.DocMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
