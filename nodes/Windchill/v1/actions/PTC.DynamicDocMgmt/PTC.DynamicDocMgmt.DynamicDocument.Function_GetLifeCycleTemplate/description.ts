import { INodeProperties } from "n8n-workflow";

export const PtcDynamicDocMgmtDynamicDocumentFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'DynamicDocumentId',
		name: 'DynamicDocumentId-string(path)',
		description: 'Dynamic Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /DynamicDocuments('{DynamicDocumentId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
