import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationHolderFunctionDownloadUrlsDescription: INodeProperties[] = [
	{
		displayName: 'OperationHolderId',
		name: 'OperationHolderId-string(path)',
		description: 'Operation Holder ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /OperationHolders('{OperationHolderId}')/PTC.MfgProcMgmt.DownloadUrls()",
				],
			},
		},
		required: true,
	},
];
