import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtDocumentManageableFunctionDownloadUrlsDescription: INodeProperties[] = [
	{
		displayName: 'DocumentManageableId',
		name: 'DocumentManageableId-string(path)',
		description: 'Document Manageable ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /DocumentManageables('{DocumentManageableId}')/PTC.MfgProcMgmt.DownloadUrls()",
				],
			},
		},
		required: true,
	},
];
