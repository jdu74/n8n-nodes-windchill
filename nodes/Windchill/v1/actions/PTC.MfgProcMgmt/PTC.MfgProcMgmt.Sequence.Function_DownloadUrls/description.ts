import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtSequenceFunctionDownloadUrlsDescription: INodeProperties[] = [
	{
		displayName: 'SequenceId',
		name: 'SequenceId-string(path)',
		description: 'Sequence ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Sequences('{SequenceId}')/PTC.MfgProcMgmt.DownloadUrls()",
				],
			},
		},
		required: true,
	},
];
