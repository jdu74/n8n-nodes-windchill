import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtSkillFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'SkillId',
		name: 'SkillId-string(path)',
		description: 'Skill ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Skills('{SkillId}')/PTC.MfgProcMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
