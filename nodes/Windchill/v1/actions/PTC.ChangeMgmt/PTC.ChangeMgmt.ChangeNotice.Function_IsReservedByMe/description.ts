import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeNoticeFunctionIsReservedByMeDescription: INodeProperties[] = [
	{
		displayName: 'ChangeNoticeId',
		name: 'ChangeNoticeId-string(path)',
		description: 'Change Notice ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.IsReservedByMe()",
				],
			},
		},
		required: true,
	},
];
