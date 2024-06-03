export const GENERAL_ERROR = 'Something went wrong!';
const constants : any = {
    error: 'Something went wrong!',
    success: 'Successfully processed',
    role: {
        T1: 'tier_1',
        T2: 'tier_2',
        T3L1: 'tier_3_level_1',
        T3L2: 'tier_3_level_2',
        T3L3: 'tier_3_level_3',
        T4L1: 'tier_4_level_1',
        T4L2: 'tier_4_level_2',
        T4L3: 'tier_4_level_3',
        T5: 'tier_5',
    },
    highRoleTiers: [
        'tier_3_level_1',
        'tier_3_level_2',
        'tier_3_level_3',
        'tier_4_level_1',
        'tier_4_level_2',
        'tier_4_level_3',
        'tier_5',
    ],
    sentBackStatuses: [
        'resubmitted',
        'tier_3_level_1_sent_back',
        'tier_3_level_2_sent_back',
        'tier_3_level_3_sent_back',
        'tier_4_level_1_sent_back',
        'tier_4_level_2_sent_back',
        'tier_4_level_3_sent_back',
        'tier_5_sent_back',
    ],
    notInProgressStatuses: [
        'new',
        'approved',
        'approved_and_paid',
        'rejected'
    ],
    requestStatuses: {
        new : [
            'new'
        ],
        rejected : [
            'rejected'
        ],
        cancelled : [
            'cancelled'
        ],
        inProgress : [
            'resubmitted',
            'sent_for_inspection',
            'inspection_approved',
            'inspection_rejected',
            'under_approval',
            'pending_payment',
            'tier_3_level_1_approved',
            'tier_3_level_1_rejected',
            'tier_3_level_1_sent_back',
            'tier_3_level_2_approved',
            'tier_3_level_2_rejected',
            'tier_3_level_2_sent_back',
            'tier_3_level_3_approved',
            'tier_3_level_3_rejected',
            'tier_3_level_3_sent_back',
            'tier_4_level_1_approved',
            'tier_4_level_1_rejected',
            'tier_4_level_1_sent_back',
            'tier_4_level_2_approved',
            'tier_4_level_2_rejected',
            'tier_4_level_2_sent_back',
            'tier_4_level_3_approved',
            'tier_4_level_3_rejected',
            'tier_4_level_3_sent_back',
            'tier_5_approved',
            'tier_5_rejected',
            'tier_5_sent_back'
        ],
        sentBack : [
            'sent_back'
        ],
        completed : [
            'approved',
            'approved_and_paid',
        ],
    },
    requestActionStatuses : {
        tier_1 : {
            approve : [
                'new',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
            ],
            reject : [
                'new',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
            ],
            amend : [
                'new',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
            ],
            approveWithInspection : [
                'new',
                'resubmitted',
                'inspection_rejected',
            ]
        },
        tier_2 : {
            finalAprove : [
                'new',
                'under_approval',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
                'tier_4_level_3_approved',
                'tier_5_approved',
            ],
            finalReject : [
                'new',
                'under_approval',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
                'tier_3_level_1_rejected',
                'tier_3_level_2_rejected',
                'tier_3_level_3_rejected',
                'tier_4_level_1_rejected',
                'tier_4_level_2_rejected',
                'tier_4_level_3_rejected',
                'tier_5_rejected',
            ],
            amend : [
                'new',
                'under_approval',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
                'tier_3_level_1_sent_back',
                'tier_3_level_2_sent_back',
                'tier_3_level_3_sent_back',
                'tier_4_level_1_sent_back',
                'tier_4_level_2_sent_back',
                'tier_4_level_3_sent_back',
                'tier_5_sent_back',
            ],
            approveWithInspection : [
                'new',
                'under_approval',
                'resubmitted',
                'inspection_rejected',
                'tier_3_level_1_sent_back',
                'tier_3_level_2_sent_back',
                'tier_3_level_3_sent_back',
                'tier_4_level_1_sent_back',
                'tier_4_level_2_sent_back',
                'tier_4_level_3_sent_back',
                'tier_5_sent_back',
            ],
            startWorkFlow : [
                'new',
                'under_approval',
                'resubmitted',
                'inspection_approved',
                'inspection_rejected',
                'tier_3_level_1_sent_back',
                'tier_3_level_2_sent_back',
                'tier_3_level_3_sent_back',
                'tier_4_level_1_sent_back',
                'tier_4_level_2_sent_back',
                'tier_4_level_3_sent_back',
                'tier_5_sent_back',
            ]
        },
        tier_3_level_1 : {
            approve : [
                'under_approval',
            ],
            reject : [
                'under_approval',
            ],
            amend : [
                'under_approval',
            ]
        },
        tier_3_level_2 : {
            approve : [
                'under_approval',
                'tier_3_level_1_approved',
            ],
            reject : [
                'under_approval',
                'tier_3_level_1_approved',
            ],
            amend : [
                'under_approval',
                'tier_3_level_1_approved',
            ]
        },
        tier_3_level_3 : {
            approve : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
            ],
            reject : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
            ],
            amend : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
            ]
        },
        tier_4_level_1 : {
            approve : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
            ],
            reject : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
            ],
            amend : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
            ]
        },
        tier_4_level_2 : {
            approve : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
            ],
            reject : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
            ],
            amend : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
            ]
        },
        tier_4_level_3 : {
            approve : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
            ],
            reject : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
            ],
            amend : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
            ]
        },
        tier_5 : {
            approve : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
                'tier_4_level_3_approved',
            ],
            reject : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
                'tier_4_level_3_approved',
            ],
            amend : [
                'under_approval',
                'tier_3_level_1_approved',
                'tier_3_level_2_approved',
                'tier_3_level_3_approved',
                'tier_4_level_1_approved',
                'tier_4_level_2_approved',
                'tier_4_level_3_approved',
            ]
        },
    }
};

export default constants;