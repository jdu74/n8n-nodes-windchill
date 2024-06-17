import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtSequenceHolderFunctionDownloadUrlsDescription: INodeProperties[] = [
	{
		displayName: 'SequenceHolderId',
		name: 'SequenceHolderId-string(path)',
		description: 'Sequence Holder ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /SequenceHolders('{SequenceHolderId}')/PTC.MfgProcMgmt.DownloadUrls()",
				],
			},
		},
		required: true,
	},
];
