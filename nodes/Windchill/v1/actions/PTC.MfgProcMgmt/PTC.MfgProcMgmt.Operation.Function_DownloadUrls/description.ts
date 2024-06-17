import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationFunctionDownloadUrlsDescription: INodeProperties[] = [
	{
		displayName: 'OperationId',
		name: 'OperationId-string(path)',
		description: 'Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.DownloadUrls()",
				],
			},
		},
		required: true,
	},
];
