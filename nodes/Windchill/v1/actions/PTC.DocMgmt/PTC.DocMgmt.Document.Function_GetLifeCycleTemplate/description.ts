import { INodeProperties } from "n8n-workflow";

export const PtcDocMgmtDocumentFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /Documents('{DocumentId}')/PTC.DocMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
