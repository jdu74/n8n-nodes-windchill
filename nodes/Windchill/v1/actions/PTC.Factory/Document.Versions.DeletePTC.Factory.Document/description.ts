import { INodeProperties } from "n8n-workflow";

export const DocumentVersionsDeletePtcFactoryDocumentDescription: INodeProperties[] = [
	{
		displayName: 'DocumentId',
		name: 'DocumentId-string(path)',
		description: 'Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /Documents('{DocumentId}')/Versions('{VersionsId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'VersionsId',
		name: 'VersionsId-string(path)',
		description: 'Versions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /Documents('{DocumentId}')/Versions('{VersionsId}')",
				],
			},
		},
		required: true,
	},
];
